using Accentis.Business.Contracts.Services.BuildingTypes;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Services.BuildingTypes
{
    public class BuildingTypeService: IBuildingTypeService
    {
        public List<BuildingType> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingTypeRepository.Get();
            }
        }

        public void CreateBuildingType(BuildingType buildingtype)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.BuildingTypeRepository.Insert(buildingtype);
                unitOfWork.BuildingTypeRepository.Save();
            }
        }

        public void UpdateBuildingType(BuildingType buildingtype)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.BuildingTypeRepository.Update(buildingtype);
                unitOfWork.BuildingTypeRepository.Save();
            }
        }

        public BuildingType GetBuildingType(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingTypeRepository.Get(id);
            }
        }

        public List<BuildingType> GetBuildingTypes()
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.BuildingTypeRepository.GetBuildingTypes();
            }
        }
    }
}
