"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),Person=function(){function e(n){_classCallCheck(this,e),this.name=n}return _createClass(e,[{key:"hello",value:function(){return"string"==typeof this.name?"Hello, I am "+this.name+"!":"Hello!"}}]),e}(),person=new Person("Mo"),greetHTML=templates.greeting({message:person.hello()});document.write(greetHTML);
"use strict";for(var max=10,i=0;i<max;i++)console.log(i);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmRhcnktc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIlBlcnNvbiIsIm5hbWUiLCJ0aGlzIiwidmFsdWUiLCJwZXJzb24iLCJncmVldEhUTUwiLCJ0ZW1wbGF0ZXMiLCJtZXNzYWdlIiwiaGVsbG8iLCJkb2N1bWVudCIsIndyaXRlIiwibWF4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFjLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFJNWhCa0IsT0FBUyxXQUNYLFFBQVNBLEdBQU9DLEdBQ2RyQixnQkFBZ0JzQixLQUFNRixHQUV0QkUsS0FBS0QsS0FBT0EsRUFjZCxNQVhBakIsY0FBYWdCLElBQ1hKLElBQUssUUFDTE8sTUFBTyxXQUNMLE1BQXlCLGdCQUFkRCxNQUFLRCxLQUNQLGVBQWlCQyxLQUFLRCxLQUFPLElBRTdCLGFBS05ELEtBR0xJLE9BQVMsR0FBSUosUUFBTyxNQUVwQkssVUFBWUMsVUFBb0IsVUFDbENDLFFBQVNILE9BQU9JLFNBR2xCQyxVQUFTQyxNQUFNTDtBQ2pDZixZQUlBLEtBQUssR0FGRE0sS0FBTSxHQUVEdkIsRUFBSSxFQUFHQSxFQUFJdUIsSUFBS3ZCLElBQ3ZCd0IsUUFBUUMsSUFBSXpCIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQZXJzb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBlcnNvbihuYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcnNvbik7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBlcnNvbiwgW3tcbiAgICBrZXk6ICdoZWxsbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlbGxvKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAnSGVsbG8sIEkgYW0gJyArIHRoaXMubmFtZSArICchJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnSGVsbG8hJztcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGVyc29uO1xufSgpO1xuXG52YXIgcGVyc29uID0gbmV3IFBlcnNvbignTW8nKTtcblxudmFyIGdyZWV0SFRNTCA9IHRlbXBsYXRlc1snZ3JlZXRpbmcnXSh7XG4gIG1lc3NhZ2U6IHBlcnNvbi5oZWxsbygpXG59KTtcblxuZG9jdW1lbnQud3JpdGUoZ3JlZXRIVE1MKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1heCA9IDEwO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gIGNvbnNvbGUubG9nKGkpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
