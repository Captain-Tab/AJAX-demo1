let n = 1;

getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // 把json数据转化为javasript数据
      //   const object1 = JSON.parse(request.response);

      alert(request.response);
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if ((request.readyState = 4 && request.status === 200)) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      alert(text);
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    // 完成下载，但是不知道是否下载成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建div标签
        const div = document.createElement("div");
        // 通过AJAX的响应修改div标签
        div.innerHTML = request.response;
        // 把div标签插入html的body中
        document.body.appendChild(div);
      } else {
        alert("加载HTML失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    // 完成下载，但是不知道是否下载成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建script标签
        const script = document.createElement("script");
        // 通过AJAX的响应修改script标签
        script.innerHTML = request.response;
        // 把script标签插入html的body中
        document.body.appendChild(script);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css");
  request.onreadystatechange = () => {
    // 完成下载，但是不知道是否下载成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建style标签
        const style = document.createElement("style");
        // 通过AJAX的响应修改style标签
        style.innerHTML = request.response;
        // 把style标签插入html的head中
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};
