using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.RoofComponent
{
  public interface IRoofComponentsService
    {
        List<RoofComponents> GetAllRoofComponents();

        List<RoofComponents> Get();

        void CreateRoofComponents(RoofComponents roofComponents);

        void UpdateRoofComponents(RoofComponents roofComponents);

        RoofComponents GetRoofComponentsById(int id);
    }
}
