#  Class SchemaInterceptor

Namespace: [CloudCore.Interceptors](CloudCore.Interceptors.md)  
Assembly: CloudCore.dll  

used to replace the current schema

```csharp
public class SchemaInterceptor : EmptyInterceptor, IInterceptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
EmptyInterceptor ← 
[SchemaInterceptor](CloudCore.Interceptors.SchemaInterceptor.md)

#### Implements

IInterceptor

#### Inherited Members

EmptyInterceptor.Instance, 
EmptyInterceptor.OnDelete\(object, object, object\[\], string\[\], IType\[\]\), 
EmptyInterceptor.OnCollectionRecreate\(object, object\), 
EmptyInterceptor.OnCollectionRemove\(object, object\), 
EmptyInterceptor.OnCollectionUpdate\(object, object\), 
EmptyInterceptor.OnFlushDirty\(object, object, object\[\], object\[\], string\[\], IType\[\]\), 
EmptyInterceptor.OnLoad\(object, object, object\[\], string\[\], IType\[\]\), 
EmptyInterceptor.OnSave\(object, object, object\[\], string\[\], IType\[\]\), 
EmptyInterceptor.PostFlush\(ICollection\), 
EmptyInterceptor.PreFlush\(ICollection\), 
EmptyInterceptor.IsTransient\(object\), 
EmptyInterceptor.Instantiate\(string, object\), 
EmptyInterceptor.GetEntityName\(object\), 
EmptyInterceptor.GetEntity\(string, object\), 
EmptyInterceptor.FindDirty\(object, object, object\[\], object\[\], string\[\], IType\[\]\), 
EmptyInterceptor.AfterTransactionBegin\(ITransaction\), 
EmptyInterceptor.BeforeTransactionCompletion\(ITransaction\), 
EmptyInterceptor.AfterTransactionCompletion\(ITransaction\), 
EmptyInterceptor.SetSession\(ISession\), 
EmptyInterceptor.OnPrepareStatement\(SqlString\), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  OnPrepareStatement\(SqlString\)

Called when sql string is being prepared.

```csharp
public override SqlString OnPrepareStatement(SqlString sql)
```

#### Parameters

`sql` SqlString

sql to be prepared

#### Returns

 SqlString

original or modified sql

