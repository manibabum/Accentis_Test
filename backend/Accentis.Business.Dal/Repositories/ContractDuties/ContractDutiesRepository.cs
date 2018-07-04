using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.ContractDuties;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.ContractDuties
{
    public class ContractDutiesRepository : BaseRepository<ContractDuty>, IContractDutiesRepository
    {
        public ContractDutiesRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<ContractDuty> GetAllContractDuties()
        {
            return Context.ContractDuty.Where(x => x.Delete == false && x.Status == true).OrderByDescending(x=>x.Cdid).ToList();
        }
    }
}
