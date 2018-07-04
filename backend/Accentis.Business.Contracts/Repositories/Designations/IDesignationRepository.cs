using Accentis.Database.Domain.Domain;
using Accentis.Business.Contracts.Repositories.General;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.Designations
{
    public interface IDesignationRepository: IBaseRepository<Designation>
    {
        List<Designation> GetAllDesignation();
        bool CheckExistingDesignation(string designationName);
    }
}
