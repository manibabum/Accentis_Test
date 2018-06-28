using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.Inspection
{
    public interface IInspectionService
    {
        void CreateInspection(Inspections inspections);

        void UpdateInspection(Inspections inspections);

        Inspections GetInspection(int id);

        List<Inspections> GetAllInspections();

        List<Inspections> Get();
    }
}
