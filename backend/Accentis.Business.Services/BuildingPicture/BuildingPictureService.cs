using System.Collections.Generic;
using Accentis.Business.Contracts.Services.BuildingPicture;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.BuildingPicture
{
    public class BuildingPictureService : IBuildingPictureService
    {
        public void CreateBuildingPictures(BuildingPictures buildingPictures)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.BuildingPicturesRepository.Insert(buildingPictures);
                unitOfWork.BuildingPicturesRepository.Save();
            }
        }

        public List<BuildingPictures> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
               return unitOfWork.BuildingPicturesRepository.Get();
            }
        }

        public List<BuildingPictures> GetAllBuildingPictures()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingPicturesRepository.GetAllBuildingPictures();
            }
        }

        public BuildingPictures GetBuildingPicture(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingPicturesRepository.Get(id);
            }
        }

        public void UpdateBuildingPictures(BuildingPictures buildingPictures)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.BuildingPicturesRepository.Update(buildingPictures);
                unitOfWork.BuildingPicturesRepository.Save();
            }
        }
    }
}
