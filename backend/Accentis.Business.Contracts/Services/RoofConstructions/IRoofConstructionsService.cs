using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.RoofConstructions
{
   public interface IRoofConstructionsService
    {
        void CreateRoofConstruction(RoofConstruction roofConstruction);

        void UpdateRoofConstruction(RoofConstruction roofConstruction);

        RoofConstruction GetRoofConstruction(int id);

        List<RoofConstruction> GetAllRoofConstructions();

        List<RoofConstruction> Get();
    }
}
