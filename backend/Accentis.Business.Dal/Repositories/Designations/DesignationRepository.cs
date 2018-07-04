using Accentis.Business.Contracts.Repositories.Designations;
using Accentis.Database.Domain.Domain;
using System.Linq;
using Accentis.Business.Dal.Repositories.General;
using System.Collections.Generic;

namespace Accentis.Business.Dal.Repositories.Designations
{
    public class DesignationRepository: BaseRepository<Designation>, IDesignationRepository
    {
        public DesignationRepository(Accentis_NewContext _context) : base(_context)
        {
            Context = _context;
        }
        public List<Designation> GetAllDesignation()
        {
            return Context.Designation.OrderByDescending(x=>x.DesignationId).Where(x => x.Delete == false && x.Status==true).ToList();
        }
        public bool CheckExistingDesignation(string designationName)
        {
            bool isbool = Context.Designation.ToList().Any(x => x.DesignationName.ToLower() == designationName.ToLower());
            return isbool;
        }
    }
}
