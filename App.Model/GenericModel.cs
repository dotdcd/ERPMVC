using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Model
{
    public class GenericModel
    {
        public string id { get; set; }
        public string text { get; set; }
    }

    public enum ListName
    {
        Empleados,
        Proyectos,
        Customers,
        TipoProveedor,
        TipoEmpleado,
        CentroDeCostos,
        Sucursales,
        Puestos,
        Periodos,
        Empresas,
        Sexo,
        EstadoCivil,
        PerfilApp,
        TiposIndirecto
    }

}
