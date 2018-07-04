using Accentis.Business.Contracts.Services.Designations;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Services.Designations
{
   public class DesignationService: IDesignationService
    {
        public List<Designation> GetAllDesignation()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.DesignationRepository.GetAllDesignation();
            }
        }

        public void CreateDesignation(Designation designation)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.DesignationRepository.Insert(designation);
                unitOfWork.DesignationRepository.Save();
            }
        }

        public void UpdateDesignation(Designation designation)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.DesignationRepository.Update(designation);
                unitOfWork.DesignationRepository.Save();
            }
        }

        public bool CheckExistingDesignation(string designationName)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.DesignationRepository.CheckExistingDesignation(designationName);
            }
        }

        public Designation GetDesignationById(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.DesignationRepository.Get(id);
            }
        }

        public List<Designation> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.DesignationRepository.Get();
            }
        }
    }
}
