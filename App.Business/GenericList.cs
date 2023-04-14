using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using App.Model;
using App.Contracts;
using App.Data;

namespace App.Business
{
    public class GenericList : IGenericList
    {
        private Repository repository;


        public GenericList()
        {
            repository = new Repository();
        }

        public List<GenericModel> GetListOfItems(ListName option)
        {
            switch (option)
            {
                case ListName.Empleados:
                    List<GenericModel> lista = GetEmpleados();
                    return lista;

                case ListName.TipoProveedor:
                    List<GenericModel> lista2 = GetTipoProveedor();
                    return lista2;

                case ListName.TipoEmpleado:
                    List<GenericModel> lista3 = GetTipoEmpleado();
                    return lista3;

                case ListName.CentroDeCostos:
                    List<GenericModel> lista4 = GetCentroDeCostos();
                    return lista4;

                case ListName.Sucursales:
                    List<GenericModel> lista5 = GetSucursales();
                    return lista5;

                case ListName.Puestos:
                    List<GenericModel> lista6 = GetPuestos();
                    return lista6;

                case ListName.Periodos:
                    List<GenericModel> lista7 = GetPeriodos();
                    return lista7;

                case ListName.Empresas:
                    List<GenericModel> lista8 = GetEmpresas();
                    return lista8;

                case ListName.Sexo:
                    List<GenericModel> lista9 = GetSexo();
                    return lista9;

                case ListName.EstadoCivil:
                    List<GenericModel> lista10 = GetEstadoCivil();
                    return lista10;

                case ListName.PerfilApp:
                    List<GenericModel> lista11 = GetPerfilApp();
                    return lista11;

                case ListName.TiposIndirecto:
                    List<GenericModel> lista12 = GetTiposIndirecto();
                    return lista12;
            }
            return null;
        }

        public List<GenericModel> GetListOfItemsByParentId(ListName option, string IdParent)
        {
            if (option == ListName.Proyectos)
            {
                List<GenericModel> lista = GetProyectos(IdParent);
                return lista;
            }
            if (option == ListName.Customers)
            {
                List<GenericModel> lista = GetCustomers(IdParent);
                return lista;
            }
            return null;
        }

        //? List of ERP

        //! Lists of proovedores
        private List<GenericModel> GetTipoProveedor()
        {
            string jsonResult = repository.getDataList("spGetPTipos", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        //! Lists of Empleados
        private List<GenericModel> GetTipoEmpleado()
        {
            string jsonResult = repository.getDataList("spGetActividadTipo", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetCentroDeCostos()
        {
            string jsonResult = repository.getDataList("spGetCentroDeCostos", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetSucursales()
        {
            string jsonResult = repository.getDataList("spGetSucursal", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetPuestos()
        {
            string jsonResult = repository.getDataList("spGetPuesto", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetPeriodos()
        {
            string jsonResult = repository.getDataList("spGetPeriodo", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetEmpresas()
        {
            string jsonResult = repository.getDataList("spGetMultiempresas", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetSexo()
        {
            string jsonResult = repository.getDataList("spGetSexo", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetEstadoCivil()
        {
            string jsonResult = repository.getDataList("spGetEstadoCivil", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetPerfilApp()
        {
            string jsonResult = repository.getDataList("spGetPerfilApp", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetTiposIndirecto()
        {
            string jsonResult = repository.getDataList("spGetTipoIndirecto", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }





        private List<GenericModel> GetEmpleados()
        {
            string jsonResult = repository.getDataList("spGetEmpleados", null);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private List<GenericModel> GetProyectos(string filter)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@idCustomer", value = filter });
            string jsonResult = repository.getDataList("spGetProyectos", paramList);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }        

        private List<GenericModel> GetCustomers(string filter)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@idUser", value = filter });
            string jsonResult = repository.getDataList("spGetCustomers", paramList);
            try
            {
                List<GenericModel> lista = JsonConvert.DeserializeObject<List<GenericModel>>(jsonResult);
                return lista;
            }
            catch (Exception e)
            {
                return null;
            }
        }
        
    }
}
