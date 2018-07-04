using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.BuildingPicture
{
    public interface IBuildingPictureRepository: IBaseRepository<BuildingPictures>
    {
        List<BuildingPictures> GetAllBuildingPictures();
    }
}
