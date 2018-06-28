using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.BuildingPicture;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.BuildingPicture
{
    public class BuildingPictureRepository : BaseRepository<BuildingPictures>, IBuildingPictureRepository
    {
        public BuildingPictureRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<BuildingPictures> GetAllBuildingPictures()
        {
            return Context.BuildingPictures.OrderByDescending(x=>x.Bpid).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}
