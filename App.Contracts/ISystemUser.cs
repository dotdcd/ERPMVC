using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Model;

namespace App.Contracts
{
    public interface ISystemUser
    {
        UserModel GetUserByLogin(string login, string password);
    }
}
