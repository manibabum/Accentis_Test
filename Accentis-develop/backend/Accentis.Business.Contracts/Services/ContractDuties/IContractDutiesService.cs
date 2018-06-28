using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.ContractDuties
{
   public interface IContractDutiesService
    {
        void CreateContractDuties(ContractDuty contractDuty);

        void UpdateContractDuties(ContractDuty contractDuty);

        ContractDuty GetContractDuty(int id);

        List<ContractDuty> GetAllContractDuties();

        List<ContractDuty> Get();
    }
}
