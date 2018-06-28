using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.Roofs
{
    public interface IRoofService
    {
        void CreateRoof(Roof roof);

        void UpdateRoof(Roof roof);

        Roof GetRoof(int id);

        List<Roof> GetAllRoofs();

        List<Roof> Get();
    }
}
