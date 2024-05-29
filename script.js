function button(xid,w,h,p,br,bgcolor,color,fsize,decoration,fcase,variant,fstyle,fweight,bw,bs,bc,right,down,spread,bblur,scolor,inset) {
    let x = document.getElementById(`${xid}`);
    x.style.width = w;
    x.style.height = h;
    x.style.padding = p;
    x.style.borderRadius = br;
    x.style.backgroundColor = bgcolor;
    x.style.color = color;
    x.style.fontSize = fsize;
    x.style.textDecoration = decoration;
    x.style.fontVariantCaps = variant;
    x.style.textTransform = fcase;
    x.style.fontStyle = fstyle;
    x.style.fontWeight = fweight;
    x.style.borderWidth = bw;
    x.style.borderStyle = bs;
    x.style.borderColor = bc;
    x.style.boxShadow = `${inset === true?"inset":" "} ${right} ${down} ${bblur} ${spread} ${scolor}`;
    document.getElementById("script").innerHTML = `style = "box-sizing: border-box;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ntext-align: center;\nwidth:${w};\nheight:${h};\npadding:${p};\nborder-radius:${br};\nbackground-color:${bgcolor};\ncolor:${color}:\nfont-size:${fsize}:\ntext-decoration:${decoration};\nfont-variant:${variant};\nfont-style:${fstyle};\ntext-transform:${fcase};\nfont-weight:${fweight};\nborder:${bw} ${bs} ${bc};\nbox-shadow:${inset === true?"inset":" "} ${right} ${down} ${bblur} ${spread} ${scolor};"`;
};

document.addEventListener("input", () => {
    w = document.getElementById("widthvalue").value = document.getElementById("width").value + "px";
    h = document.getElementById("heightvalue").value = document.getElementById("height").value + "px";
    p = document.getElementById("paddingvalue").value = document.getElementById("padding").value + "px";
    br = document.getElementById("borderradiusvalue").value = document.getElementById("borderradius").value + "px";
    bgcolor = document.getElementById("backgroundcolor").value;
    color = document.getElementById("color").value;

    fsize = document.getElementById("fsizevalue").value = document.getElementById("fsize").value + "px";
    decoration = document.getElementById("decoration").value + " solid rgb(68, 68, 68)";
    fcase = document.getElementById("case").value;
    variant = document.getElementById("variant").value;
    fstyle = document.getElementById("fstyle").value;
    fweight = document.getElementById("weight").value;

    bw = document.getElementById("bwidthvalue").value = document.getElementById("bwidth").value + "px";
    bs = document.getElementById("bstyle").value;
    bc = document.getElementById("bcolor").value;

    right = document.getElementById("rightvalue").value = document.getElementById("right").value + "px";
    down = document.getElementById("downvalue").value = document.getElementById("down").value + "px";
    spread = document.getElementById("spreadvalue").value = document.getElementById("spread").value + "px";
    bblur = document.getElementById("blurvalue").value = document.getElementById("blur").value + "px";
    scolor = document.getElementById("shadowcolor").value;
    inset = document.getElementById("inset").checked;

    document.getElementById("button").innerHTML = document.getElementById("textbox").value;

    button("button", w, h, p, br, bgcolor, color,fsize,decoration,fcase,variant,fstyle,fweight,bw,bs,bc,right,down,spread,bblur,scolor,inset);
});