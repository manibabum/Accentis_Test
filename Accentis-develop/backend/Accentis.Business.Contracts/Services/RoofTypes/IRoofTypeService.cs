using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.RoofTypes
{
    public interface IRoofTypeService
    {
        List<RoofType> GetAllRoofTypes();

        void CreateRoofType(RoofType rooftype);

        void UpdateRoofType(RoofType rooftype);

        RoofType GetRoofType(int id);

        List<RoofType> Get();

    }
}
