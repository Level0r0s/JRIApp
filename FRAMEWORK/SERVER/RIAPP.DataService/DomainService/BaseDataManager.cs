﻿using System;
using System.Threading.Tasks;
using RIAPP.DataService.DomainService.Interfaces;
using RIAPP.DataService.DomainService.Types;

namespace RIAPP.DataService.DomainService
{
    public class BaseDataManager<TDataService, TModel> : IDataManager<TModel>, IServicesProvider
        where TModel : class
        where TDataService : BaseDomainService
    {
        public TDataService DataService
        {
            get { return (TDataService) RequestContext.DataService; }
        }

        protected RequestContext RequestContext
        {
            get { return RequestContext.Current; }
        }

        protected QueryRequest CurrentQueryInfo
        {
            get { return RequestContext.CurrentQueryInfo; }
        }

        public virtual void Insert(TModel model)
        {
            throw new NotImplementedException();
        }

        public virtual void Update(TModel model)
        {
            throw new NotImplementedException();
        }

        public virtual void Delete(TModel model)
        {
            throw new NotImplementedException();
        }

        public virtual Task AfterExecuteChangeSet()
        {
            return Task.FromResult(string.Empty);
        }

        public IServiceContainer ServiceContainer
        {
            get { return DataService.ServiceContainer; }
        }


        public object GetParent(Type entityType)
        {
            return RequestContext.GetParent(entityType);
        }

        public TModel GetOriginal()
        {
            return RequestContext.GetOriginal<TModel>();
        }

        public TModel2 GetParent<TModel2>()
            where TModel2 : class
        {
            return RequestContext.GetParent<TModel2>();
        }
    }
}