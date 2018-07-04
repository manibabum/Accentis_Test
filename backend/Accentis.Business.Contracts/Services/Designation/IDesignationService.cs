using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.Designations
{
    public interface IDesignationService
    {
        List<Designation> GetAllDesignation();

        List<Designation> Get();

        void CreateDesignation(Designation designation);

        void UpdateDesignation(Designation designation);

        bool CheckExistingDesignation(string designationName);

        Designation GetDesignationById(int id);
    }
}
