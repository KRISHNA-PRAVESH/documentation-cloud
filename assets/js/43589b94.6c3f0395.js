"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[109],{5942:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>a});var s=o(4848),i=o(8453);const r={},n="Class Reader",m={id:"CloudCommon/CloudCommon.Http.Filters.Reader",title:"Class Reader",description:"Namespace: CloudCommon.Http.Filters",source:"@site/docs/CloudCommon/CloudCommon.Http.Filters.Reader.md",sourceDirName:"CloudCommon",slug:"/CloudCommon/CloudCommon.Http.Filters.Reader",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.Filters.Reader",draft:!1,unlisted:!1,editUrl:"https://github.com/KRISHNA-PRAVESH/documentation-cloud/docs/CloudCommon/CloudCommon.Http.Filters.Reader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Namespace CloudCommon.Http.Context",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.Context"},next:{title:"Namespace CloudCommon.Http.Filters",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.Filters"}},c={},a=[{value:"Inheritance",id:"Inheritance",level:4},{value:"Implements",id:"Implements",level:4},{value:"Inherited Members",id:"Inherited-Members",level:4},{value:"Extension Methods",id:"Extension-Methods",level:4},{value:"Constructors",id:"Constructors",level:2},{value:"replaced Reader(Type)",id:"replaced-ReaderType",level:3},{value:"Parameters",id:"Parameters",level:4},{value:"replaced Reader(string)",id:"replaced-Readerstring",level:3},{value:"Parameters",id:"Parameters-1",level:4},{value:"Methods",id:"Methods",level:2},{value:"replaced OnActionExecuting(ActionExecutingContext)",id:"replaced-OnActionExecutingActionExecutingContext",level:3},{value:"Parameters",id:"Parameters-2",level:4}];function l(t){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"Class-Reader",children:"Class Reader"}),"\n",(0,s.jsxs)(e.p,{children:["Namespace: ",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.Filters",children:"CloudCommon.Http.Filters"}),(0,s.jsx)(e.br,{}),"\nAssembly: CloudCommon.dll"]}),"\n",(0,s.jsx)(e.p,{children:"used for reading data from the body stream as byte array and deserialized it into specific type passed in the constructor and build an reader context from it's end."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-csharp",children:"public class Reader : ActionFilterAttribute, IActionFilter, IAsyncActionFilter, IResultFilter, IAsyncResultFilter, IOrderedFilter, IFilterMetadata\n"})}),"\n",(0,s.jsx)(e.h4,{id:"Inheritance",children:"Inheritance"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object",children:"object"})," \u2190\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute",children:"Attribute"})," \u2190\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute",children:"ActionFilterAttribute"})," \u2190\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.Filters.Reader",children:"Reader"})]}),"\n",(0,s.jsx)(e.h4,{id:"Implements",children:"Implements"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.iactionfilter",children:"IActionFilter"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.iasyncactionfilter",children:"IAsyncActionFilter"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.iresultfilter",children:"IResultFilter"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.iasyncresultfilter",children:"IAsyncResultFilter"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.iorderedfilter",children:"IOrderedFilter"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.ifiltermetadata",children:"IFilterMetadata"})]}),"\n",(0,s.jsx)(e.h4,{id:"Inherited-Members",children:"Inherited Members"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute.onactionexecuting",children:"ActionFilterAttribute.OnActionExecuting(ActionExecutingContext)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute.onactionexecuted",children:"ActionFilterAttribute.OnActionExecuted(ActionExecutedContext)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute.onactionexecutionasync",children:"ActionFilterAttribute.OnActionExecutionAsync(ActionExecutingContext, ActionExecutionDelegate)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute.onresultexecuting",children:"ActionFilterAttribute.OnResultExecuting(ResultExecutingContext)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute.onresultexecuted",children:"ActionFilterAttribute.OnResultExecuted(ResultExecutedContext)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute.onresultexecutionasync",children:"ActionFilterAttribute.OnResultExecutionAsync(ResultExecutingContext, ResultExecutionDelegate)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionfilterattribute.order",children:"ActionFilterAttribute.Order"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.equals",children:"Attribute.Equals(object?)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type)",children:"Attribute.GetCustomAttribute(Assembly, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type-system-boolean)",children:"Attribute.GetCustomAttribute(Assembly, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type)",children:"Attribute.GetCustomAttribute(MemberInfo, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type-system-boolean)",children:"Attribute.GetCustomAttribute(MemberInfo, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type)",children:"Attribute.GetCustomAttribute(Module, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type-system-boolean)",children:"Attribute.GetCustomAttribute(Module, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type)",children:"Attribute.GetCustomAttribute(ParameterInfo, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type-system-boolean)",children:"Attribute.GetCustomAttribute(ParameterInfo, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly)",children:"Attribute.GetCustomAttributes(Assembly)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-boolean)",children:"Attribute.GetCustomAttributes(Assembly, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type)",children:"Attribute.GetCustomAttributes(Assembly, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type-system-boolean)",children:"Attribute.GetCustomAttributes(Assembly, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo)",children:"Attribute.GetCustomAttributes(MemberInfo)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-boolean)",children:"Attribute.GetCustomAttributes(MemberInfo, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type)",children:"Attribute.GetCustomAttributes(MemberInfo, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type-system-boolean)",children:"Attribute.GetCustomAttributes(MemberInfo, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module)",children:"Attribute.GetCustomAttributes(Module)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-boolean)",children:"Attribute.GetCustomAttributes(Module, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type)",children:"Attribute.GetCustomAttributes(Module, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type-system-boolean)",children:"Attribute.GetCustomAttributes(Module, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo)",children:"Attribute.GetCustomAttributes(ParameterInfo)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-boolean)",children:"Attribute.GetCustomAttributes(ParameterInfo, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type)",children:"Attribute.GetCustomAttributes(ParameterInfo, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type-system-boolean)",children:"Attribute.GetCustomAttributes(ParameterInfo, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode",children:"Attribute.GetHashCode()"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute",children:"Attribute.IsDefaultAttribute()"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type)",children:"Attribute.IsDefined(Assembly, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type-system-boolean)",children:"Attribute.IsDefined(Assembly, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type)",children:"Attribute.IsDefined(MemberInfo, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type-system-boolean)",children:"Attribute.IsDefined(MemberInfo, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type)",children:"Attribute.IsDefined(Module, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type-system-boolean)",children:"Attribute.IsDefined(Module, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type)",children:"Attribute.IsDefined(ParameterInfo, Type)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type-system-boolean)",children:"Attribute.IsDefined(ParameterInfo, Type, bool)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.match",children:"Attribute.Match(object?)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.attribute.typeid",children:"Attribute.TypeId"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)",children:"object.Equals(object?)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)",children:"object.Equals(object?, object?)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gethashcode",children:"object.GetHashCode()"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gettype",children:"object.GetType()"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone",children:"object.MemberwiseClone()"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.referenceequals",children:"object.ReferenceEquals(object?, object?)"}),",\n",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.tostring",children:"object.ToString()"})]}),"\n",(0,s.jsx)(e.h4,{id:"Extension-Methods",children:"Extension Methods"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_As__1_System_Object_",children:"GenericExtension.As<T>(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.AssemblyUtil#CloudCommon_Utils_AssemblyUtil_ChangeType__1_System_Object_",children:"AssemblyUtil.ChangeType<T>(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJson__1___0_",children:"GenericExtension.CloneByJson<Reader>(Reader)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJsonUsingType_System_Object_System_Type_",children:"GenericExtension.CloneByJsonUsingType(object, Type)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinary_System_Object_",children:"ObjectUtil.ConvertToBinary(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryProtoBuf_System_Object_",children:"ObjectUtil.ConvertToBinaryProtoBuf(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryWithGZipCompression_System_Object_",children:"ObjectUtil.ConvertToBinaryWithGZipCompression(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression__1_System_Object_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression<T>(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression_System_Object_System_Type_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression(object, Type)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CopyPropertiesTo__2___0___1_",children:"GenericExtension.CopyPropertiesTo<Reader, U>(Reader, U)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_DeepCopy__1___0_",children:"GenericExtension.DeepCopy<Reader>(Reader)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize__1_System_Object_",children:"BinarySerializationUtil.Deserialize<T>(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize_System_Object_System_Type_",children:"BinarySerializationUtil.Deserialize(object, Type)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_EqualsAnyOf__1___0___0___",children:"GenericExtension.EqualsAnyOf<Reader>(Reader, params Reader[])"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Serialize_System_Object_",children:"BinarySerializationUtil.Serialize(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeUsingUTF8JSON_System_Object_",children:"ObjectUtil.SerializeUsingUTF8JSON(object)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeWithProtoBuf__1___0_",children:"ObjectUtil.SerializeWithProtoBuf<Reader>(Reader)"}),",\n",(0,s.jsx)(e.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_ToSerializedJsonString__1___0_System_Boolean_",children:"GenericExtension.ToSerializedJsonString<Reader>(Reader, bool)"})]}),"\n",(0,s.jsx)(e.h2,{id:"Constructors",children:"Constructors"}),"\n",(0,s.jsx)(e.h3,{id:"replaced-ReaderType",children:"replaced Reader(Type)"}),"\n",(0,s.jsx)(e.p,{children:"used to pass an Type as deserialization argument"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-csharp",children:"public Reader(Type parameterType)\n"})}),"\n",(0,s.jsx)(e.h4,{id:"Parameters",children:"Parameters"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"parameterType"})," ",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.type",children:"Type"})]}),"\n",(0,s.jsx)(e.h3,{id:"replaced-Readerstring",children:"replaced Reader(string)"}),"\n",(0,s.jsx)(e.p,{children:"used to pass an parameterType as deserialization argument PS :  it will fetch the type qualified name from action arguments."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-csharp",children:"public Reader(string parameterArgumentName)\n"})}),"\n",(0,s.jsx)(e.h4,{id:"Parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"parameterArgumentName"})," ",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})]}),"\n",(0,s.jsx)(e.h2,{id:"Methods",children:"Methods"}),"\n",(0,s.jsx)(e.h3,{id:"replaced-OnActionExecutingActionExecutingContext",children:"replaced OnActionExecuting(ActionExecutingContext)"}),"\n",(0,s.jsx)(e.p,{children:"executes before the api method entry. here the reader context will be initialized."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-csharp",children:"public override void OnActionExecuting(ActionExecutingContext context)\n"})}),"\n",(0,s.jsx)(e.h4,{id:"Parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"context"})," ",(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.actionexecutingcontext",children:"ActionExecutingContext"})]})]})}function d(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>n,x:()=>m});var s=o(6540);const i={},r=s.createContext(i);function n(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function m(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:n(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);