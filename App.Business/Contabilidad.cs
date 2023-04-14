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
    public class Contabilidad : IContabilidad
    {
        private Repository repository;

        public Contabilidad()
        {
            repository = new Repository();
        }

        //!Inversiones
        private IEnumerable<InversionesModel> GetInversionesDB()
        {
            string jsonResult = repository.getDataList("spGetInversiones", null);
            try
            {
                IList<InversionesModel> inversiones = JsonConvert.DeserializeObject<List<InversionesModel>>(jsonResult);
                return inversiones;
            }
            catch (Exception e)
            {
                return null;
            }

        }


        private InversionesModel GetInversionByIdDB(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@inversion_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetInversionById", paramList);
                InversionesModel inversion = JsonConvert.DeserializeObject<List<InversionesModel>>(jsonResult)[0];
                inversion.ActivoChk = inversion.inversion_estatus_baja == "0" ? true : false;
                return inversion;
            }
            catch (Exception e)
            {
                return null;
            }
        }


        private string AddInversionDb(InversionesModel inversion)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@inversion_id", value = inversion.inversion_id });
            paramList.Add(new ParamModel() { param = "@inversion_clave", value = inversion.inversion_clave });
            paramList.Add(new ParamModel() { param = "@inversion_descripcion", value = inversion.inversion_descripcion });
            paramList.Add(new ParamModel() { param = "@inversion_estatus_baja", value = inversion.inversion_estatus_baja });
            try
            {
                string result = repository.insData("spAddInversion", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //! Empresas
        private IEnumerable<EmpresasModel> GetEmpresasDB()
        {
            string jsonResult = repository.getDataList("spGetEmpresas", null);
            try
            {
                IList<EmpresasModel> empresas = JsonConvert.DeserializeObject<List<EmpresasModel>>(jsonResult);
                return empresas;
            }
            catch (Exception e)
            {
                return null;
            }

        }

        private EmpresasModel GetEmpresaByIdDB(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@empresa_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetEmpresaById", paramList);
                EmpresasModel empresa = JsonConvert.DeserializeObject<List<EmpresasModel>>(jsonResult)[0];
                empresa.ActivoChk = empresa.empresa_estatus_baja == "0" ? true : false;
                return empresa;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddEmpresaDb(EmpresasModel empresa)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@empresa_id", value = empresa.empresa_id });
            paramList.Add(new ParamModel() { param = "@empresa_razon_social", value = empresa.empresa_razon_social });
            paramList.Add(new ParamModel() { param = "@empresa_direccion", value = empresa.empresa_direccion });
            paramList.Add(new ParamModel() { param = "@empresa_colonia", value = empresa.empresa_colonia });
            paramList.Add(new ParamModel() { param = "@empresa_ciudad_estado", value = empresa.empresa_ciudad_estado });
            paramList.Add(new ParamModel() { param = "@empresa_rfc", value = empresa.empresa_rfc });
            paramList.Add(new ParamModel() { param = "@empresa_telefono", value = empresa.empresa_telefono });
            paramList.Add(new ParamModel() { param = "@empresa_registro_patronal", value = empresa.empresa_registro_patronal });
            paramList.Add(new ParamModel() { param = "@empresa_estatus_baja", value = empresa.empresa_estatus_baja });
            paramList.Add(new ParamModel() { param = "@empresa_regimen_fiscal", value = empresa.empresa_regimen_fiscal });
            paramList.Add(new ParamModel() { param = "@empresa_cp", value = empresa.empresa_cp });
            try
            {
                string result = repository.insData("spAddEmpresa", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //? Empleados
        private IEnumerable<EmpleadosModel> GetEmpleadosDB()
        {
            string jsonResult = repository.getDataList("spGetEmpleados", null);
            try
            {
                IList<EmpleadosModel> empleados = JsonConvert.DeserializeObject<List<EmpleadosModel>>(jsonResult);
                return empleados;
            }
            catch (Exception e)
            {
                return null;
            }

        }

        private EmpleadosModel GetEmpleadosByIdDB(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@empleado_id", value = Id });
            try
            {
                string jsonResult = repository.getDataList("spGetEmpleadoById", paramList);
                EmpleadosModel empleado = JsonConvert.DeserializeObject<List<EmpleadosModel>>(jsonResult)[0];
                empleado.ActivoChk = empleado.empleado_estatus_baja == "0" ? true : false;
                return empleado;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddEmpleadoDb(EmpleadosModel empleado)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@empleado_id", value = empleado.empleado_id });
            paramList.Add(new ParamModel() { param = "@empleado_nombre", value = empleado.empleado_nombre });
            paramList.Add(new ParamModel() { param = "@empleado_paterno", value = empleado.empleado_paterno });
            paramList.Add(new ParamModel() { param = "@empleado_materno", value = empleado.empleado_materno });
            paramList.Add(new ParamModel() { param = "@empleado_imss", value = empleado.empleado_imss });
            paramList.Add(new ParamModel() { param = "@empleado_nacimiento", value = empleado.empleado_nacimiento });
            paramList.Add(new ParamModel() { param = "@empleado_entrada", value = empleado.empleado_entrada });
            paramList.Add(new ParamModel() { param = "@empleado_direccion", value = empleado.empleado_direccion });
            paramList.Add(new ParamModel() { param = "@empleado_telefono", value = empleado.empleado_telefono });
            paramList.Add(new ParamModel() { param = "@empleado_email", value = empleado.empleado_email });
            paramList.Add(new ParamModel() { param = "@empleado_centrodecostos_id", value = empleado.empleado_centrodecostos_id });
            paramList.Add(new ParamModel() { param = "@empleado_puesto_id", value = empleado.empleado_puesto_id });
            paramList.Add(new ParamModel() { param = "@empleado_sueldo", value = empleado.empleado_sueldo });
            paramList.Add(new ParamModel() { param = "@empleado_sueldo_imss", value = empleado.empleado_sueldo_imss });
            paramList.Add(new ParamModel() { param = "@empleado_cuenta_deposito", value = empleado.empleado_cuenta_deposito });
            paramList.Add(new ParamModel() { param = "@empleado_cuenta_deposito_maquila", value = empleado.empleado_cuenta_deposito_maquila });
            paramList.Add(new ParamModel() { param = "@empleado_periodo_id", value = empleado.empleado_periodo_id });
            paramList.Add(new ParamModel() { param = "@empleado_diario", value = empleado.empleado_diario });
            paramList.Add(new ParamModel() { param = "@empleado_rfc", value = empleado.empleado_rfc });
            paramList.Add(new ParamModel() { param = "@empleado_curp", value = empleado.empleado_curp });
            paramList.Add(new ParamModel() { param = "@empleado_empresa_id", value = empleado.empleado_empresa_id });
            paramList.Add(new ParamModel() { param = "@empleado_sexo_id", value = empleado.empleado_sexo_id });
            paramList.Add(new ParamModel() { param = "@empleado_estado_civil_id", value = empleado.empleado_estado_civil_id });
            paramList.Add(new ParamModel() { param = "@empleado_usuario", value = empleado.empleado_usuario });
            paramList.Add(new ParamModel() { param = "@empleado_password", value = empleado.empleado_password });
            paramList.Add(new ParamModel() { param = "@empleado_estatus_baja", value = empleado.empleado_estatus_baja });
            paramList.Add(new ParamModel() { param = "@empleado_administrador", value = empleado.empleado_administrador });
            paramList.Add(new ParamModel() { param = "@empleado_actividad_tipo", value = empleado.empleado_actividad_tipo });
            paramList.Add(new ParamModel() { param = "@empleado_perfil_app", value = empleado.empleado_perfil_app });
            paramList.Add(new ParamModel() { param = "@sucursal_id", value = empleado.sucursal_id });
            paramList.Add(new ParamModel() { param = "@tipo_indirecto_id", value = empleado.tipo_indirecto_id });
            paramList.Add(new ParamModel() { param = "@empleado_contacto_emergencia_nombre", value = empleado.empleado_contacto_emergencia_nombre });
            paramList.Add(new ParamModel() { param = "@empleado_contacto_emergencia_telefono", value = empleado.empleado_contacto_emergencia_telefono });
            try
            {
                string result = repository.insData("spAddEmpleado", paramList);
                return result;
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        //! Empresas Interfaces section
        public IEnumerable<EmpresasModel> GetEmpresas()
        {
            return GetEmpresasDB();
        }

        public EmpresasModel GetEmpresaById(string Id)
        {
            return GetEmpresaByIdDB(Id);
        }

        public string AddEmpresa(EmpresasModel empresa)
        {
            empresa.empresa_estatus_baja = empresa.ActivoChk ? "0" : "1";
            return AddEmpresaDb(empresa);
        }

        //! Inversiones Interfaces section

        public IEnumerable<InversionesModel> GetInversiones()
        {
            return GetInversionesDB();
        }

        public InversionesModel GetInversionById(string Id)
        {
            return GetInversionByIdDB(Id);
        }

        public string AddInversion(InversionesModel inversion)
        {
            inversion.inversion_estatus_baja = inversion.ActivoChk ? "0" : "1";
            return AddInversionDb(inversion);
        }

        //! Empleados Interfaces section
        public IEnumerable<EmpleadosModel> GetEmpleados()
        {
            return GetEmpleadosDB();
        }

        public EmpleadosModel GetEmpleadosById(string Id)
        {
            return GetEmpleadosByIdDB(Id);
        }

        public string AddEmpleado(EmpleadosModel empleado)
        {
            return AddEmpleadoDb(empleado);
        }
    }
}
