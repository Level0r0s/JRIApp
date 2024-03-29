﻿using System;
using System.IO;
using System.Threading.Tasks;

namespace RIAppDemo.BLL.DataServices
{
    public interface IThumbnailService : IDisposable
    {
        string GetThumbnail(int id, Stream strm);
        void SaveThumbnail(int id, string fileName, Stream strm);
        void SaveThumbnail2(int id, string fileName, Func<Stream, Task> copy);
    }
}