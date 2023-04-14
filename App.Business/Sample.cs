using System;
using System.Collections.Generic;
using App.Contracts;
using App.Model;
using App.Data;
using Newtonsoft.Json;

namespace App.Business
{
    public class Sample : ISample
    {
        private Repository repository;
        private const string spGetTickets = "spGetTicketsByUser";

        public Sample()
        {
            repository = new Repository();
        }

        private IEnumerable<SampleModel> GetTicketsByUserDb(string idUser, string dateIni, string dateEnd)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@idUser", value = idUser });
            paramList.Add(new ParamModel() { param = "@dateIni", value = dateIni });
            paramList.Add(new ParamModel() { param = "@dateEnd", value = dateEnd });
            
            string jsonResult = repository.getDataList(spGetTickets, paramList);
            try
            {
                IList<SampleModel> tickets = JsonConvert.DeserializeObject<List<SampleModel>>(jsonResult);
                return tickets;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        private string AddTicket(SampleModel Sample)
        {
            string result = "0";
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@idTicket", value = Sample.IdTicket });
            paramList.Add(new ParamModel() { param = "@descTicket", value = Sample.DescTicket });
            paramList.Add(new ParamModel() { param = "@ubicacion", value = "" });
            paramList.Add(new ParamModel() { param = "@idUser", value = Sample.IdUser });
            paramList.Add(new ParamModel() { param = "@idProject", value = Sample.IdProject });
            paramList.Add(new ParamModel() { param = "@idEmpleadoDot", value = Sample.IdUserAssigned });
            paramList.Add(new ParamModel() { param = "@urlImagen", value = "" });

            try
            {
                result = repository.insData("spInsTicket", paramList);
            }
            catch (Exception e)
            {
            }
            return result;
        }

        private SampleModel GetTicketByIdDb(string Id)
        {
            List<ParamModel> paramList = new List<ParamModel>();
            paramList.Add(new ParamModel() { param = "@idTicket", value = Id });
            string jsonResult = repository.getDataList("spGetTicketById", paramList);
            try
            {
                SampleModel ticket = JsonConvert.DeserializeObject<List<SampleModel>>(jsonResult)[0];
                return ticket;
            }
            catch (Exception e)
            {
                return null;
            }
        }



        // interfaces 

        public IEnumerable<SampleModel> GetTicketsByUser(string idUser, string dateIni, string dateEnd)
        {
            return GetTicketsByUserDb(idUser, dateIni, dateEnd);
        }

        public SampleModel GetTicketById(string Id)
        {
            return GetTicketByIdDb(Id);
        }

        public string Add(SampleModel Sample)
        {
            return AddTicket(Sample);
        }

    }
}
