using System;
using System.Collections.Generic;
using App.Contracts;
using App.Model;
using App.Data;
using Newtonsoft.Json;
using System.Net;
using System.Text.RegularExpressions;
using System.Net.Http.Headers;

namespace App.Business
{
    public class Admin : IAdmin
    {
        private Repository repository;        

        public Admin()
        {
            repository = new Repository();
        }

        //? Function to declarate the date if is null or empty
        static string DateIsSet(string date)
        {
            if(date == null || date == "")
            {
                string currentDate = DateTime.Now.ToString("yyyy-MM-dd");
                return currentDate;
            }
            return date;
        }


        //! Proveedores tipos
        private IEnumerable<PTModel> GetPTiposDB()
        {
            string jsonResult = repository.getDataList("spGetPTipos", null);
            try
            {
                IList<PTModel> ptipos = JsonConvert.DeserializeObject<List<PTModel>>(jsonResult);
                return ptipos;
            }
            catch (Exception e)
            {
                return null;
            }
        }
        
        //! Marcas Section

        private IEnumerable<MarcasModel> GetMarcasDb()
        {            
            string jsonResult = repository.getDataList("spGetMarcas", null);
            try
            {
                IList<MarcasModel> marcas = JsonConvert.DeserializeObject<List<MarcasModel>>(jsonResult);
                return marcas;
            }
            catch (Exception e)
            {
                return null;
            }
        }
       
        private MarcasModel GetMarcaByIdDb(string marca_id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@marca_id", value = marca_id });
            try
            {
                string jsonResult = repository.getDataList("spGetMarcaById", paramList);                
                MarcasModel marca = JsonConvert.DeserializeObject<List<MarcasModel>>(jsonResult)[0];
                marca.ActivoChk = marca.marca_estatus_baja == "0" ? true : false;
                return marca;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        private string AddMarcaDb(MarcasModel marca)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@marca_id", value = marca.marca_id });
            paramList.Add(new ParamModel() { param = "@marca_descripcion", value = marca.marca_descripcion });
            paramList.Add(new ParamModel() { param = "@marca_estatus_baja", value = marca.marca_estatus_baja });
            try
            {
                string result = repository.insData("spAddMarca", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        } 

        //! Proveedores Section
        private IEnumerable<ProveedoresModel> GetProveedoresDb()
        {
            string jsonResult = repository.getDataList("spGetProveedores", null);
            try
            {
                IList<ProveedoresModel> proveedores = JsonConvert.DeserializeObject<List<ProveedoresModel>>(jsonResult);
                return proveedores;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private ProveedoresModel GetProveedorByIdDB(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@proveedor_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetProveedor", paramList);
                ProveedoresModel proveedor = JsonConvert.DeserializeObject<List<ProveedoresModel>>(jsonResult)[0];
                proveedor.ActivoChk = proveedor.proveedor_estatus_baja == "0" ? true : false;
                return proveedor;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddProveedorDB(ProveedoresModel proveedor)
        {
            List<ParamModel> paramlist = new List<ParamModel>();
            paramlist.Add(new ParamModel() { param = "@proveedor_id", value = proveedor.proveedor_id });
            paramlist.Add(new ParamModel() { param = "@proveedor_razon_social", value = proveedor.proveedor_razon_social });
            paramlist.Add(new ParamModel() { param = "@proveedor_contacto", value = proveedor.proveedor_contacto });
            paramlist.Add(new ParamModel() { param = "@proveedor_contacto_email", value = proveedor.proveedor_contacto_email });
            paramlist.Add(new ParamModel() { param = "@proveedor_telefono", value = proveedor.proveedor_telefono });
            paramlist.Add(new ParamModel() { param = "@proveedor_direccion", value = proveedor.proveedor_direccion });
            paramlist.Add(new ParamModel() { param = "@proovedor_rfc", value = proveedor.proovedor_rfc });
            paramlist.Add(new ParamModel() { param = "@proveedor_web", value = proveedor.proveedor_web });
            paramlist.Add(new ParamModel() { param = "@proveedor_usuario_password", value = proveedor.proveedor_usuario_password });
            paramlist.Add(new ParamModel() { param = "@proveedor_dias_credito", value = proveedor.proveedor_dias_credito });
            paramlist.Add(new ParamModel() { param = "@proveedor_limite_credito", value = proveedor.proveedor_limite_credito });
            paramlist.Add(new ParamModel() { param = "@proveedor_tipo_id", value = proveedor.proveedor_tipo_id });
            paramlist.Add(new ParamModel() { param = "@proveedor_estatus_baja", value = proveedor.proveedor_estatus_baja });
            try
            {
                string result = repository.insData("spAddProveedor", paramlist);
                return result;
            }
            catch
            {
                return null;
            }
        }

        //! Proveedores x MarcaS
        private IEnumerable<PMarcaModel> GetPMarcasDb()
        {
            string jsonResult = repository.getDataList("spGetPXM", null);
            try
            {
                IList<PMarcaModel> pm = JsonConvert.DeserializeObject<List<PMarcaModel>>(jsonResult);
                return pm;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string DelPMByIdDb(PMarcaModel pm)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@marca", value = pm.marca });
            paramList.Add(new ParamModel() { param = "@proveedor", value = pm.proveedor});
            try
            {
                string result = repository.insData("spDelPXM", paramList);
                return result;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddPMDB(PMarcaModel pm)
        {
            List<ParamModel> paramlist = new List<ParamModel>();
            paramlist.Add(new ParamModel() { param = "@proveedor", value = pm.proveedor });
            paramlist.Add(new ParamModel() { param = "@marca", value = pm.marca });
            try
            {
                string result = repository.insData("spAddPXM", paramlist);
                return result;
            }
            catch
            {
                return null;
            }
        }

        //! Cables
        private IEnumerable<CablesModel> GetCablesDb()
        {
            string jsonResult = repository.getDataList("spGetCables", null);
            try
            {
                IList<CablesModel> cables = JsonConvert.DeserializeObject<List<CablesModel>>(jsonResult);
                return cables;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private CablesModel GetCableByIdDb(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@cable_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetCableById", paramList);
                CablesModel cable = JsonConvert.DeserializeObject<List<CablesModel>>(jsonResult)[0];
                cable.ActivoChk = cable.cable_estatus_baja == "0" ? true : false;
                return cable;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddCableDb(CablesModel cable)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@cable_id", value = cable.cable_id });
            paramList.Add(new ParamModel() { param = "@clave", value = cable.clave });
            paramList.Add(new ParamModel() { param = "@descripcion", value = cable.descripcion });
            paramList.Add(new ParamModel() { param = "@cable_estatus_baja", value = cable.cable_estatus_baja });
            try
            {
                string result = repository.insData("spAddCable", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //! Clientes
        private IEnumerable<ClientesModel> GetClientesDb()
        {
            string jsonResult = repository.getDataList("spGetClientes", null);
            try
            {
                IList<ClientesModel> clientes = JsonConvert.DeserializeObject<List<ClientesModel>>(jsonResult);
                return clientes;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private ClientesModel GetClienteByIdDb(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@cliente_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetClienteById", paramList);
                ClientesModel cliente = JsonConvert.DeserializeObject<List<ClientesModel>>(jsonResult)[0];
                cliente.ActivoChk = cliente.cliente_estatus_baja == "0" ? true : false;
                return cliente;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddClienteDb(ClientesModel cliente)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@cliente_id", value = cliente.cliente_id });
            paramList.Add(new ParamModel() { param = "@cliente_razon_social", value = cliente.cliente_razon_social });
            paramList.Add(new ParamModel() { param = "@cliente_rfc", value = cliente.cliente_rfc });
            paramList.Add(new ParamModel() { param = "@cliente_calle", value = cliente.cliente_calle });
            paramList.Add(new ParamModel() { param = "@cliente_numero", value = cliente.cliente_numero });
            paramList.Add(new ParamModel() { param = "@cliente_codigo_postal", value = cliente.cliente_codigo_postal });
            paramList.Add(new ParamModel() { param = "@cliente_colonia", value = cliente.cliente_colonia });
            paramList.Add(new ParamModel() { param = "@cliente_municipio", value = cliente.cliente_municipio });
            paramList.Add(new ParamModel() { param = "@cliente_estado", value = cliente.cliente_estado });
            paramList.Add(new ParamModel() { param = "@cliente_telefono", value = cliente.cliente_telefono });
            paramList.Add(new ParamModel() { param = "@cliente_email", value = cliente.cliente_email });
            paramList.Add(new ParamModel() { param = "@cliente_contacto", value = cliente.cliente_contacto });
            paramList.Add(new ParamModel() { param = "@cliente_cobranza", value = cliente.cliente_cobranza });
            paramList.Add(new ParamModel() { param = "@cliente_estatus_baja", value = cliente.cliente_estatus_baja });
            paramList.Add(new ParamModel() { param = "@cliente_trafico", value = cliente.cliente_trafico });
            paramList.Add(new ParamModel() { param = "@cliente_regimen_fiscal", value = cliente.cliente_regimen_fiscal });
            try
            {
                string result = repository.insData("spAddCliente", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //! Disciplinas
        private IEnumerable<DisciplinasModel> GetDisciplinasDb()
        {
            string jsonResult = repository.getDataList("spGetDisciplinas", null);
            try
            {
                IList<DisciplinasModel> disciplinas = JsonConvert.DeserializeObject<List<DisciplinasModel>>(jsonResult);
                return disciplinas;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private DisciplinasModel GetDisciplinaByIdDb(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@familia_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetDisciplinaById", paramList);
                DisciplinasModel disciplina = JsonConvert.DeserializeObject<List<DisciplinasModel>>(jsonResult)[0];
                disciplina.ActivoChk = disciplina.familia_estatus_baja == "0" ? true : false;
                return disciplina;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddDisciplinaDb(DisciplinasModel disciplina)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@familia_id", value = disciplina.familia_id });
            paramList.Add(new ParamModel() { param = "@familia_descripcion", value = disciplina.familia_descripcion });
            paramList.Add(new ParamModel() { param = "@familia_clave", value = disciplina.familia_clave });
            paramList.Add(new ParamModel() { param = "@familia_estatus_baja", value = disciplina.familia_estatus_baja });
            try
            {
                string result = repository.insData("spAddDisciplina", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //! Sucursales
        private IEnumerable<SucursalesModel> GetSucursalesDb()
        {
            string jsonResult = repository.getDataList("spGetSucursales", null);
            try
            {
                IList<SucursalesModel> sucursales = JsonConvert.DeserializeObject<List<SucursalesModel>>(jsonResult);
                return sucursales;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private SucursalesModel GetSucursalByIdDb(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@sucursal_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetSucursalById", paramList);
                SucursalesModel sucursal = JsonConvert.DeserializeObject<List<SucursalesModel>>(jsonResult)[0];
                sucursal.ActivoChk = sucursal.sucursal_estatus_baja == "0" ? true : false;
                return sucursal;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddSucursalDb(SucursalesModel sucursal)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@sucursal_id", value = sucursal.sucursal_id });
            paramList.Add(new ParamModel() { param = "@sucursal_nombre", value = sucursal.sucursal_nombre });
            paramList.Add(new ParamModel() { param = "@sucursal_estatus_baja", value = sucursal.sucursal_estatus_baja });
            try
            {
                string result = repository.insData("spAddSucursal", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //! Dispositivos
        private IEnumerable<DispositivosModel> GetDispositivosDb()
        {
            string jsonResult = repository.getDataList("spGetDispositivos", null);
            try
            {
                IList<DispositivosModel> dispositivos = JsonConvert.DeserializeObject<List<DispositivosModel>>(jsonResult);
                return dispositivos;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private DispositivosModel GetDispositivoByIdDb(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@dispositivos_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetDispositivoById", paramList);
                DispositivosModel dispositivo = JsonConvert.DeserializeObject<List<DispositivosModel>>(jsonResult)[0];
                dispositivo.ActivoChk = dispositivo.dispositivo_estatus_baja == "0" ? true : false;
                return dispositivo;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        private string AddDispositivoDb(DispositivosModel dispositivo)
        {
            List<ParamModel> paramList = new List<ParamModel>();

            try
            {
                string result = repository.insData("spAddDispositivo", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //TODO interfaces 

        //! Marcas Interfaces Section

        public IEnumerable<MarcasModel> GetMarcas()
        {
            return GetMarcasDb();
        }

        public MarcasModel GetMarcaById(string Id)
        {
            return GetMarcaByIdDb(Id);
        }

        public string AddMarca(MarcasModel marca)
        {
            marca.marca_estatus_baja = marca.ActivoChk ? "0" : "1";
            return AddMarcaDb(marca);
        }

        //! Proveedores Tipos Interfaces Section

        public IEnumerable<PTModel> GetPTipos()
        {
            return GetPTiposDB();
        }

        //! Proveedores Interfaces Section

        public IEnumerable<ProveedoresModel> GetProveedores()
        {
            return GetProveedoresDb();
        }

        public ProveedoresModel GetProveedorById(string Id)
        {
            return GetProveedorByIdDB(Id);
        }

        public string AddProveedor(ProveedoresModel proveedor)
        {
            proveedor.proveedor_estatus_baja = proveedor.ActivoChk ? "0" : "1";
            return AddProveedorDB(proveedor);
        }

        //! ProveedoresxMarca Interfaces Section
        public IEnumerable<PMarcaModel> GetPMarcas()
        {
            return GetPMarcasDb();
        }

        public string DelPMarcaById(PMarcaModel pmarca)
        {
            return DelPMarcaById(pmarca);
        }

        public string AddPMarca(PMarcaModel pmarca)
        {
            return AddPMarca(pmarca);
        }

        //! Cables interface
        public IEnumerable<CablesModel> GetCables()
        {
            return GetCablesDb();
        }

        public CablesModel GetCableById(string Id)
        {
            return GetCableByIdDb(Id);
        }

        public string AddCable(CablesModel cable)
        {
            cable.cable_estatus_baja = cable.ActivoChk ? "0" : "1";
            return AddCableDb(cable);
        }

        //! Clientes Interfaces Section
        public IEnumerable<ClientesModel> GetClientes()
        {
            return GetClientesDb();
        }

        public ClientesModel GetClienteById(string Id)
        {
            return GetClienteByIdDb(Id);
        }

        public string AddCliente(ClientesModel cliente)
        {
            cliente.cliente_estatus_baja = cliente.ActivoChk ? "0" : "1";
            return AddClienteDb(cliente);
        }

        //! Disciplina Interfaces Sectiony
        public IEnumerable<DisciplinasModel> GetDisciplinas()
        {
            return GetDisciplinasDb();
        }

        public DisciplinasModel GetDisciplinaById(string Id)
        {
            return GetDisciplinaByIdDb(Id);
        }

        public string AddDisciplina(DisciplinasModel disciplina)
        {
            disciplina.familia_estatus_baja = disciplina.ActivoChk ? "0" : "1";
            return AddDisciplinaDb(disciplina); 
        }

        //! Sucursales Interfaces Section
        public IEnumerable<SucursalesModel> GetSucursales()
        {
            return GetSucursalesDb();
        }

        public SucursalesModel GetSucursalById(string Id)
        {
            return GetSucursalByIdDb(Id);
        }

        public string AddSucursal(SucursalesModel sucursal)
        {
            sucursal.sucursal_estatus_baja = sucursal.ActivoChk ? "0" : "1";
            return AddSucursalDb(sucursal);
        }

        //! Dispositivos Interfaces Section

        public IEnumerable<DispositivosModel> GetDispositivos()
        {
            return GetDispositivosDb();
        }

        public DispositivosModel GetDispositivosById(string Id)
        {
            return GetDispositivosById(Id);

        }

        public string AddDispositivo(DispositivosModel dispositivo)
        {
            dispositivo.dispositivo_estatus_baja = dispositivo.ActivoChk ? "0" : "1";
            return AddDispositivoDb(dispositivo);
        }
    }
}
