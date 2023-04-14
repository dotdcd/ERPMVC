using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Model;

namespace App.Contracts
{
    public interface IAdmin
    {
        //? Statics
        // ProveedorTipo
        IEnumerable<PTModel> GetPTipos();

        // Marcas
        IEnumerable<MarcasModel> GetMarcas();
        MarcasModel GetMarcaById(string Id);
        string AddMarca(MarcasModel marca);

        // Proveedores
        IEnumerable<ProveedoresModel> GetProveedores();
        ProveedoresModel GetProveedorById(string Id);
        string AddProveedor(ProveedoresModel proveedor);

        // ProveedoresxMarca
        IEnumerable<PMarcaModel> GetPMarcas();
        string DelPMarcaById(PMarcaModel pmarca);
        string AddPMarca(PMarcaModel pmarca);

        // Cables
        IEnumerable<CablesModel> GetCables();
        CablesModel GetCableById(string Id);
        string AddCable(CablesModel cable);

        //Clientes
        IEnumerable<ClientesModel> GetClientes();
        ClientesModel GetClienteById(string Id);
        string AddCliente(ClientesModel cliente);

        //Disciplinas
        IEnumerable<DisciplinasModel> GetDisciplinas();
        DisciplinasModel GetDisciplinaById(string Id);
        string AddDisciplina(DisciplinasModel disciplina);

        //Sucursales
        IEnumerable<SucursalesModel> GetSucursales();
        SucursalesModel GetSucursalById(string Id);
        string AddSucursal(SucursalesModel sucursal);

        //Dispositivos
        IEnumerable<DispositivosModel> GetDispositivos();
        DispositivosModel GetDispositivosById(string Id);
        string AddDispositivo(DispositivosModel dispositivo);
    }
}
