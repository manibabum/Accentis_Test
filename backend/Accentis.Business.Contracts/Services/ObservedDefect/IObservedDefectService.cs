using Accentis.Database.Domain.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Contracts.Services.ObservedDefect
{
    public interface IObservedDefectService
    {
        void CreateObservedDefact(ObservedDefects observedDefects);

        void UpdateObservedDefact(ObservedDefects observedDefects);

        ObservedDefects GetObservedDefects(int id);

        List<ObservedDefects> GetAllObservedDefects();

        List<ObservedDefects> Get();
    }
}
