using Accentis.Business.Contracts.Services.RoofDetailElementCondition;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Accentis.Business.Services.RoofDetailElementCondition
{
    public class RoofDetailElementConditionService : IRoofDetailElementConditionService
    {
        public void CreateRoofDetailElementCondition(RoofDetailElementConditions roofDetailElementConditions)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.RoofDetailElementConditionRepository.Insert(roofDetailElementConditions);
                unitOfWork.RoofDetailElementConditionRepository.Save();
            }
        }

        public List<RoofDetailElementConditions> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofDetailElementConditionRepository.Get().ToList();
            }
        }

        public List<RoofDetailElementConditions> GetAllRoofDetailElementConditions()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofDetailElementConditionRepository.GetAllRoofDetailElementConditions();
            }
        }

        public RoofDetailElementConditions GetRoofDetailElementCondition(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofDetailElementConditionRepository.Get(id);
            }
        }

        public void UpdateRoofDetailElementCondition(RoofDetailElementConditions roofDetailElementConditions)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofDetailElementConditionRepository.Update(roofDetailElementConditions);
                unitOfWork.RoofDetailElementConditionRepository.Save();
            }
        }
    }
}
