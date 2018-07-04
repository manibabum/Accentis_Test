using System.Collections.Generic;
using Accentis.Business.Contracts.Services.ContractDuties;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.ContractDuties
{
    public class ContractDutiesService : IContractDutiesService
    {
        public void CreateContractDuties(ContractDuty contractDuty)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.ContractDutiesRepository.Insert(contractDuty);
                unitOfWork.ContractDutiesRepository.Save();
            }
        }

        public List<ContractDuty> Get()
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.ContractDutiesRepository.Get();
            }
        }

        public List<ContractDuty> GetAllContractDuties()
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.ContractDutiesRepository.GetAllContractDuties();
            }
        }

        public ContractDuty GetContractDuty(int id)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.ContractDutiesRepository.Get(id);
            }
        }

        public void UpdateContractDuties(ContractDuty contractDuty)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.ContractDutiesRepository.Update(contractDuty);
                unitOfWork.ContractDutiesRepository.Save();
            }
        }
    }
}
