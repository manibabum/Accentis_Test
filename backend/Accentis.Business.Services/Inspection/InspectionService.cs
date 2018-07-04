using System.Collections.Generic;
using Accentis.Business.Contracts.Services.Inspection;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.Inspection
{
    public class InspectionService : IInspectionService
    {
        public void CreateInspection(Inspections inspections)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.InspectionRepository.Insert(inspections);
                unitOfWork.InspectionRepository.Save();
            }
        }

        public List<Inspections> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.InspectionRepository.Get();
            }
        }

        public List<Inspections> GetAllInspections()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.InspectionRepository.GetAllInspections();
            }
        }

        public Inspections GetInspection(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.InspectionRepository.Get(id);
            }
        }

        public void UpdateInspection(Inspections inspections)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.InspectionRepository.Update(inspections);
                unitOfWork.InspectionRepository.Save();
            }
        }
    }
}
