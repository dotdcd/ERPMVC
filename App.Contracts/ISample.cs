using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Model;

namespace App.Contracts
{
    public interface ISample
    {
        IEnumerable<SampleModel> GetTicketsByUser(string IdUser, string DateIni, string DateEnd);
        SampleModel GetTicketById(string Id);
        string Add(SampleModel Sample);

    }
}
