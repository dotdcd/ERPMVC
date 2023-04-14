using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Contracts;
using App.Model;
using App.Data;
using Newtonsoft.Json;

namespace App.Business
{
    public class SystemUser : ISystemUser
    {

        private Repository repository;
        private const string loginUser = "spLoginUser";

        public SystemUser()
        {
            repository = new Repository();
        }

        private UserModel LoginUser(string login, string password)
        {
            List<ParamModel> paramList = new List<ParamModel>();

            paramList.Add(new ParamModel() { param = "@login", value = login });
            paramList.Add(new ParamModel() { param = "@password", value = password });

            UserModel user = new UserModel();
            string jsonResult = repository.getDataList(loginUser, paramList);
            try
            {
                user = JsonConvert.DeserializeObject<List<UserModel>>(jsonResult)[0];
            }
            catch (Exception e)
            {
            }
            return user;
        }

        // interfaces
        public UserModel GetUserByLogin(string login, string password)
        {
            return LoginUser(login, password);
        }


    }
}
