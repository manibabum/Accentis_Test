using Accentis.Business.Contracts.Repositories.Buildings;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;



namespace Accentis.Business.Dal.Repositories.Buildings
{
    public class BuildingRepository : BaseRepository<Building>, IBuildingRepository
    {
        public BuildingRepository(Accentis_NewContext _context) : base(_context)
        {
            Context = _context;
        }
        public List<Building> GetBuildings()
        {
            return Context.Building.Include(x=>x.BuildingType).OrderByDescending(x=>x.BuildingId).Where(x => x.Delete == false && x.Status==true).ToList();
        }
    }
}
