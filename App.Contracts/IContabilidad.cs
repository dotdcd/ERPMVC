using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Model;

namespace App.Contracts
{
    public interface IContabilidad
    {

        // Empresas
        IEnumerable<EmpresasModel> GetEmpresas();
        EmpresasModel GetEmpresaById(string Id);
        string AddEmpresa(EmpresasModel empresa);

        // Inversiones 
        IEnumerable<InversionesModel> GetInversiones();
        InversionesModel GetInversionById(string Id);
        string AddInversion(InversionesModel inversion);

        // Empleados
        IEnumerable<EmpleadosModel> GetEmpleados();
        EmpleadosModel GetEmpleadosById(string Id);
        string AddEmpleado(EmpleadosModel empleado);

    }
}
