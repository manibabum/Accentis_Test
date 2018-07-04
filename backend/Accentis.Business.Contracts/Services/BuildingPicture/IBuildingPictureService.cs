using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.BuildingPicture
{
    public interface IBuildingPictureService
    {
        void CreateBuildingPictures(BuildingPictures buildingPictures);

        void UpdateBuildingPictures(BuildingPictures buildingPictures);

        BuildingPictures GetBuildingPicture(int id);

        List<BuildingPictures> GetAllBuildingPictures();

        List<BuildingPictures> Get();
    }
}
