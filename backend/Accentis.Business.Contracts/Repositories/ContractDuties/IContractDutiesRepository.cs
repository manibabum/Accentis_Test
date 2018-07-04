using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.ContractDuties
{
   public interface IContractDutiesRepository:IBaseRepository<ContractDuty>
    {
        List<ContractDuty> GetAllContractDuties();
    }
}
