import React, { createContext, useEffect, useState } from 'react'
export const DataContext=createContext();
export const DataProvider=(props)=>{
    const [products,setProducts]=useState([
        {
            "id":"1",
            "nameProduct":"CITIZEN AU1080-20A",
            "image":"./ImgProduct/anh1.jpg",
            "description":"Đồng hồ nam Citizen AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
            "discount":0.1,
            "price":2000000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"male",
            "trademark":"Citizen",
            count:1
        },
        {
            "id":"2",
            "nameProduct":"ORIENT FSTAA002W0",
            "image":"./ImgProduct/anh2.jpg",
            "description":"Đồng hồ Orient FSTAA002W0 có vỏ kim loại phủ màu vàng sang trọng, kim chỉ và vạch số thanh mãnh nổi bật trên nền số, ô lịch ngày vị trí 3h tinh tế, dây đeo bằng chất liệu da cao cấp màu nâu đem lại phong cách lịch lãm, sang trọng cho phái mạnh",
            "discount":0.05,
            "price":3000000,
            "color":["black","white","gold"],
            "amount":"50",
            "sex":"male",
            "trademark":"Orient",
            count:1
        },
        {
            "id":"3",
            "nameProduct":"Đồng hồ Casio 1374L",
            "image":"./ImgProduct/anh3.jpg",
            "description":"Đồng hồ nam Casio 1374L nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
            "discount":0.1,
            "price":1863000 ,
            "color":["black","gold"],
            "amount":"50"
            ,
            "sex":"male",
            "trademark":"Casio",
            count:1
        },
        {
            "id":"4",
            "nameProduct":"Citizen",
            "image":"./ImgProduct/anh4.jpg",
            "description":"Đây là dòng sản phẩm tuyệt vời cho những người đang tìm kiếm chiếc đồng hồ được thiết kế riêng mang đầy đủ sự “chất” Vintage cho đến hiện nay, đó là “chất cổ điển” và chỉ là “cổ điển” tinh khiết.",
            "discount":0,
            "price":18000500,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"male",
            "trademark":"Citizen",
            count:1
           
        },
        {
            "id":"5",
            "nameProduct":"Citizen T063.90",
            "image":"./ImgProduct/anh5.jpg",
            "description":"Đồng hồ nam Citizen T063.90 nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.TISSOT T063.907.11.058.00",
            "discount":"0.1",
            "price":20000000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"male",
            "trademark":"Citizen",
            count:1
        },
        {
            "id":"6",
            "nameProduct":"Casio W-735H-1A2VDF",
            "image":"./ImgProduct/anh6.jpg",
            "description":"Khí chất mạnh mẽ với mẫu Casio W-735H-1A2VDF cùng thiết kế vỏ máy khung nhựa được tạo hình dập nổi góc cạnh, ấn tượng cùng khả năng chịu nước lên đến 10ATM phù hợp cho các hoạt động thể thao hoặc các chuyến đi phượt",
            "discount":0.1,
            "price":1200000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"male",
            "trademark":"Casio",
            count:1
        },
        {
            "id":"7",
            "nameProduct":"Casio LTP-V005D-2B3UDF",
            "image":"./ImgProduct/anh7.jpg",
            "description":"Đồng hồ nam Citizen AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
            "discount":0.2,
            "price":2100000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"female",
            "trademark":"Casio",
            count:1
        },
        {
            "id":"8",
            "nameProduct":"ROTARY GB90114/06",
            "image":"./ImgProduct/anh8.jpg",
            "description":"Đồng hồ Rotary GB90114/06 có mặt số tròn truyền thống, niềng kim loại mạ vàng tinh tế quanh nền trắng mặt số, kim chỉ và vạch chỉ giờ được gia công chi tiết mạ vàng nổi bật, dây đeo demi đem lại vẻ thời trang nữ tính.",
            "discount":0.05,
            "price":9900000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"female",
            "trademark":"Rotary",
            count:1
        },
        {
            "id":"9",
            "nameProduct":"ROTARY GB90091/21",
            "image":"./ImgProduct/anh9.jpg",
            "description":"Đồng hồ nam cao cấp Rotary GB90091/21 với mặt số tròn tinh tế, nền số màu trắng trang nhã, kim chỉ được dát mỏng và chữ số chỉ giờ được phủ màu đen nổi bật, dây đeo demi thời trang sang trọng.",
            "discount":0.1,
            "price":1504500,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"female",
            "trademark":"Rotary",
            count:1
        },
        {
            "id":"10",
            "nameProduct":"ROTARY GS90070/04",
            "image":"./ImgProduct/anh10.jpg",
            "description":"Đồng hồ Rotary GS90070/04 thiết kế dáng thể thao mạnh mẽ cùng dây đeo da đen bóng, mặt đồng hồ với nền đen với kính Sapphire chống trầy cùng kim chỉ và gạch số màu trắng phản quang",
            "discount":0.1,
            "price":1200000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"male",
            "trademark":"Rotary",
            count:1
        },
        {
            "id":"11",
            "nameProduct":"SEIKO SSB333P1",
            "image":"./ImgProduct/anh11.jpg",
            "description":"Mẫu Seiko SSB333P1 phiên bản mặt xanh 6 kim với 3 núm vặn điều chỉnh chức năng đo thời gian Chronograph mang lại vẻ ngoài thể thao đầy nam tính.",
            "discount":0.1,
            "price":5900000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"female",
            "trademark":"Seiko",
            count:1
        },

        {
            "id":"12",
            "nameProduct":"Casio AU1080-20A",
            "image":"./ImgProduct/anh12.jpg",
            "description":"Đồng hồ nam Casio AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
            "discount":0.05,
            "price":1500000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"male",
            "trademark":"Casio",
            count:1
        },
        {
            "id":"13",
            "nameProduct":"CITIZEN AU1080-20A",
            "image":"./ImgProduct/anh13.jpg",
            "description":"Đồng hồ nam Citizen AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
            "discount":0.1,
            "price":2000000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"male",
            "trademark":"",
            count:1
        },
        {
            "id":"14",
            "nameProduct":"CITIZEN AU1080-20A",
            "image":"./ImgProduct/anh14.jpg",
            "description":"Đồng hồ nam Citizen AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
            "discount":0.25,
            "price":1800000,
            "color":["black","white","gold"],
            "amount":50
            ,
            "sex":"female",
            "trademark":"Citizen",
            count:1

        },
        {
            "id":15,
            "nameProduct":"CITIZEN AU1080-20A",
            "image":"./ImgProduct/anh15.jpg",
            "description":"Đồng hồ nam Citizen AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
            "discount":0.1,
            "price":200000,
            "color":["black","white","gold"],
            "amount":50,
            "sex":"female",
            "trademark":"Citizen",
            count:1
        }
    ])
    const [cart,setCart]=useState([]);

    const addCart=(id)=>{
        //some để kiểm tra có ít nhât một phần tử có id là id thêm vào hay không
        const check=cart.some(product=>{
            //console.log(product.id);
            return product.id===id;
            
        })
        console.log(check);
        if (!check){
            const data=products.filter(product=>{
                return product.id===id
            })
            setCart([...cart,...data]);
        }
        else{
            alert("Sản phẩm đã được thêm vào giỏ hàng trước đó.");
        }
    }

    /*useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
    }
    )*/
   
    const value={
        products:[products,setProducts],
        cart:[cart,setCart],
        addCart:addCart,
    }
    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}