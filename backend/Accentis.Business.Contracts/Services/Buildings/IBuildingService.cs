using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.Buildings
{
    public interface IBuildingService
    {
        List<Building> GetBuildings();

        List<Building> Get();

        //void CreateBuilding(Building building);

        //void UpdateBuilding(Building building);

        //Building GetBuilding(int id);
    }
}
