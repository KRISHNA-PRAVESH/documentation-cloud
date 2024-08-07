#  Class IgnoreNullAndMissingResolver

Namespace: [CloudCommon.ContractResolvers](CloudCommon.ContractResolvers.md)  
Assembly: CloudCommon.dll  

```csharp
public class IgnoreNullAndMissingResolver : DefaultContractResolver, IContractResolver
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DefaultContractResolver ← 
[IgnoreNullAndMissingResolver](CloudCommon.ContractResolvers.IgnoreNullAndMissingResolver.md)

#### Implements

IContractResolver

#### Inherited Members

DefaultContractResolver.ResolveContract\(Type\), 
DefaultContractResolver.GetSerializableMembers\(Type\), 
DefaultContractResolver.CreateObjectContract\(Type\), 
DefaultContractResolver.CreateConstructorParameters\(ConstructorInfo, JsonPropertyCollection\), 
DefaultContractResolver.CreatePropertyFromConstructorParameter\(JsonProperty?, ParameterInfo\), 
DefaultContractResolver.ResolveContractConverter\(Type\), 
DefaultContractResolver.CreateDictionaryContract\(Type\), 
DefaultContractResolver.CreateArrayContract\(Type\), 
DefaultContractResolver.CreatePrimitiveContract\(Type\), 
DefaultContractResolver.CreateLinqContract\(Type\), 
DefaultContractResolver.CreateISerializableContract\(Type\), 
DefaultContractResolver.CreateDynamicContract\(Type\), 
DefaultContractResolver.CreateStringContract\(Type\), 
DefaultContractResolver.CreateContract\(Type\), 
DefaultContractResolver.CreateProperties\(Type, MemberSerialization\), 
DefaultContractResolver.CreateMemberValueProvider\(MemberInfo\), 
DefaultContractResolver.CreateProperty\(MemberInfo, MemberSerialization\), 
DefaultContractResolver.ResolvePropertyName\(string\), 
DefaultContractResolver.ResolveExtensionDataName\(string\), 
DefaultContractResolver.ResolveDictionaryKey\(string\), 
DefaultContractResolver.GetResolvedPropertyName\(string\), 
DefaultContractResolver.DynamicCodeGeneration, 
DefaultContractResolver.DefaultMembersSearchFlags, 
DefaultContractResolver.SerializeCompilerGeneratedMembers, 
DefaultContractResolver.IgnoreSerializableInterface, 
DefaultContractResolver.IgnoreSerializableAttribute, 
DefaultContractResolver.IgnoreIsSpecifiedMembers, 
DefaultContractResolver.IgnoreShouldSerializeMembers, 
DefaultContractResolver.NamingStrategy, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[GenericExtension.As<T\>\(object\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_As\_\_1\_System\_Object\_), 
[AssemblyUtil.ChangeType<T\>\(object\)](CloudCommon.Utils.AssemblyUtil.md\#CloudCommon\_Utils\_AssemblyUtil\_ChangeType\_\_1\_System\_Object\_), 
[GenericExtension.CloneByJson<IgnoreNullAndMissingResolver\>\(IgnoreNullAndMissingResolver\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<IgnoreNullAndMissingResolver, U\>\(IgnoreNullAndMissingResolver, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<IgnoreNullAndMissingResolver\>\(IgnoreNullAndMissingResolver\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<IgnoreNullAndMissingResolver\>\(IgnoreNullAndMissingResolver, params IgnoreNullAndMissingResolver\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<IgnoreNullAndMissingResolver\>\(IgnoreNullAndMissingResolver\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<IgnoreNullAndMissingResolver\>\(IgnoreNullAndMissingResolver, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Methods

###  CreateProperty\(MemberInfo, MemberSerialization\)

Creates a <xref href="Newtonsoft.Json.Serialization.JsonProperty" data-throw-if-not-resolved="false"></xref> for the given <xref href="System.Reflection.MemberInfo" data-throw-if-not-resolved="false"></xref>.

```csharp
protected override JsonProperty CreateProperty(MemberInfo member, MemberSerialization memberSerialization)
```

#### Parameters

`member` [MemberInfo](https://learn.microsoft.com/dotnet/api/system.reflection.memberinfo)

The member to create a <xref href="Newtonsoft.Json.Serialization.JsonProperty" data-throw-if-not-resolved="false"></xref> for.

`memberSerialization` MemberSerialization

The member's parent <xref href="Newtonsoft.Json.MemberSerialization" data-throw-if-not-resolved="false"></xref>.

#### Returns

 JsonProperty

A created <xref href="Newtonsoft.Json.Serialization.JsonProperty" data-throw-if-not-resolved="false"></xref> for the given <xref href="System.Reflection.MemberInfo" data-throw-if-not-resolved="false"></xref>.

