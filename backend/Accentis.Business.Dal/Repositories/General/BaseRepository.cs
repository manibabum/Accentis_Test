using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Accentis.Business.Dal.Repositories.General
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected Accentis_NewContext Context;

        protected BaseRepository(Accentis_NewContext context)
        {
            Context = context;
        }

        public List<T> Get()
        {
            return this.Context.Set<T>().ToList();
        }
        public IEnumerable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this.Context.Set<T>().Where(expression);
        }
        public void Insert(T entity)
        {
            this.Context.Set<T>().Add(entity);
        }
        public void Update(T entity)
        {
            this.Context.Set<T>().Update(entity);
        }
        public void Delete(T entity)
        {
            this.Context.Set<T>().Remove(entity);
        }
        public void Save()
        {
            this.Context.SaveChanges();
        }
        public T Get(int id)
        {
            return Context.Set<T>().Find(id);
        }
    }
}
