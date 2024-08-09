#  Class WebHostEnvironment

Namespace: [CloudManager](CloudManager.md)  
Assembly: CloudManager.dll  

```csharp
public class WebHostEnvironment : IWebHostEnvironment, IHostEnvironment
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WebHostEnvironment](CloudManager.WebHostEnvironment.md)

#### Implements

[IWebHostEnvironment](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.hosting.iwebhostenvironment), 
[IHostEnvironment](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.ihostenvironment)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

###  ApplicationName

Gets or sets the name of the application. This property is automatically set by the host to the assembly containing
the application entry point.

```csharp
public string ApplicationName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ContentRootFileProvider

Gets or sets an <xref href="Microsoft.Extensions.FileProviders.IFileProvider" data-throw-if-not-resolved="false"></xref> pointing at <xref href="Microsoft.Extensions.Hosting.IHostEnvironment.ContentRootPath" data-throw-if-not-resolved="false"></xref>.

```csharp
public IFileProvider ContentRootFileProvider { get; set; }
```

#### Property Value

 [IFileProvider](https://learn.microsoft.com/dotnet/api/microsoft.extensions.fileproviders.ifileprovider)

###  ContentRootPath

Gets or sets the absolute path to the directory that contains the application content files.

```csharp
public string ContentRootPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  EnvironmentName

Gets or sets the name of the environment. The host automatically sets this property to the value of the
"environment" key as specified in configuration.

```csharp
public string EnvironmentName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  WebRootFileProvider

Gets or sets an <xref href="Microsoft.Extensions.FileProviders.IFileProvider" data-throw-if-not-resolved="false"></xref> pointing at <xref href="Microsoft.AspNetCore.Hosting.IWebHostEnvironment.WebRootPath" data-throw-if-not-resolved="false"></xref>.

```csharp
public IFileProvider WebRootFileProvider { get; set; }
```

#### Property Value

 [IFileProvider](https://learn.microsoft.com/dotnet/api/microsoft.extensions.fileproviders.ifileprovider)

###  WebRootPath

Gets or sets the absolute path to the directory that contains the web-servable application content files.

```csharp
public string WebRootPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

