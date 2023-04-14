using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Model;

namespace App.Contracts
{
    public interface IGenericList
    {
        List<GenericModel> GetListOfItems(ListName listName);
        List<GenericModel> GetListOfItemsByParentId(ListName listName, string IdParent);
    }
}
