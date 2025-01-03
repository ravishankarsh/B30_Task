let statusData = [
    {
        fullName: "MS Dhoni",
        profilePic: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/flqe1fpfgtxznnzrejt2",
        statusPic: "https://imgs.search.brave.com/LA23_gfA6ggS7w9nnK-Fjj8rzDI95BAK_YNkbdlg--U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpESmhNalEz/TUdJdFptUTRNeTAw/TnpFeUxXRTNNRGd0/TkRKbU16ZGhOVGsx/TW1GaVhrRXlYa0Zx/Y0djQC5qcGc",
        uploadTime: "45 mins ago"
    },
    {
        fullName: "Virat Kohli",
        profilePic: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/iwx0nlylvhbjhuvn74r9",
        statusPic: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/yxpzpx1mfacfiwwqxpmm",
        uploadTime: "2 hours ago"
    },
    {
        fullName: "Sachin Tendulkar",
        profilePic: "https://upload.wikimedia.org/wikipedia/commons/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg",
        statusPic: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/qlidh5sxknqdbatnztn8",
        uploadTime: "5 hours ago"
    },
    {
        fullName: "Rohit Sharma",
        profilePic: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/hh9knmesg9kfkexq5elv",
        statusPic: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/t43a9wisfvmsf3vbk5q4",
        uploadTime: "3 hours ago"
    },
    {
        fullName: "Deepika Padukone",
        profilePic: "https://imgs.search.brave.com/pUVJg5XQtcGXVN0lqioZBlFjJvk7_7X0mFsEASBu_iI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltTmxaVFF6/TWpRdE9ERXdaaTAw/TWpsakxUZ3pORGt0/WTJRMU1tWTBOMlE0/WlRRelhrRXlYa0Zx/Y0djQC5qcGc",
        statusPic: "https://imgs.search.brave.com/zHFJ-S8s1_dmFzwqkKB7XxgTRccP9Tkrusv8EhsreGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9waC1iaWcv/MjAyMy8xMC9kZWVw/aWthLXBhZHVrb25l/XzE2OTY0MDIwMzA3/MC5qcGc",
        uploadTime: "10 mins ago"
    },
    {
        fullName: "Alia Bhatt",
        profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg/800px-Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg",
        statusPic: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Alia_Bhatt_poses_alongside_a_red_antique_car_as_she_promotes_Gangubai_Kathiawadi.jpg",
        uploadTime: "1 hour ago"
    },
    {
        fullName: "AR Rahman",
        profilePic: "https://imgs.search.brave.com/qwMWefnmtrtUuNBKrIpkrsYV2hEzrnzzs-TwcKToGTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8xMi9B/Ui1SYWhtYW4xMi5q/cGc_dz0xMDAwJmg9/NjY3JmNyb3A9MQ",
        statusPic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Opening_Ceremony_Hockey_World_Cup_2018_%2839%29.jpg/1280px-Opening_Ceremony_Hockey_World_Cup_2018_%2839%29.jpg",
        uploadTime: "3 hours ago"
    },
    {
        fullName: "PV Sindhu",
        profilePic: "https://imgs.search.brave.com/rwVsDuD7FF7vCrgE2_TLvKzoGG_RjcGszqi6BueUe70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83LzczL1BW/X1NpbmRodV9oZWFk/c2hvdC5qcGcvNTEy/cHgtUFZfU2luZGh1/X2hlYWRzaG90Lmpw/Zw",
        statusPic: "https://imgs.search.brave.com/wZ6GEpgBrWqcPHnS9vghobRDg2PGCPKyZDM0899TR4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q5L1BhZG1hX0Jo/dXNoYW5fUFZfU2lu/ZGh1LmpwZw",
        uploadTime: "30 mins ago"
    },
    {
        fullName: "Priyanka Chopra",
        profilePic: "https://imgs.search.brave.com/3sPVZ-h6z-EOU4q4OrS5Zzq2zdltTd-afyQVG6I_jnU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAx/Ni8xMS9ob3QtcGlj/dHVyZXMtcHJpeWFu/a2EtY2hvcHJhLmpw/Zw",
        statusPic: "https://imgs.search.brave.com/gGaMPRWNpsjH87ulpIQGRR5O7MGpzlxYbVnI9Kimuko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VjLzUx/LzE2L2VjNTExNjdl/ZGU3ZGVkZWM4NGM0/YTFhN2RmMzY1M2Mz/LmpwZw",
        uploadTime: "15 mins ago"
    }
];

var sum = ''
statusData.forEach(function(elem, idx){
    sum = sum + `<div class="status" id="${idx}">
            <div id="${idx}"></div>
            <img src="${elem.profilePic}" alt="">
            <div class="status_in"><h3>${elem.fullName}</h3>
                <h6>${elem.uploadTime}</h6></div>
        </div>`
    
})
var allStatus = document.querySelector('#allStatus')
allStatus.innerHTML=sum



 var full = document.querySelector('#full')
 var username = document.querySelector('.top1 h4')
 var uploadTime = document.querySelector('.top1 h6')
 var profilePic = document.querySelector('.top1 img')
 var bottom = document.querySelector('#bottom')


allStatus.addEventListener('click',function(dets) {
    
    var stor = statusData[dets.target.id]   
    full.style.display = 'block'
    full.style.overflow = 'none'
    bottom.style.backgroundImage = `url(${stor.statusPic})`
    username.innerHTML = stor.fullName
    uploadTime.innerHTML = stor.uploadTime
    uploadTime.style.opacity = 0.7
    profilePic.src = stor.profilePic

    var progress = document.querySelector('#progress')
    var growth = document.querySelector('#growth')
    var width = 0
    var interval = setInterval(function(){
        width++
        growth.style.width = `${width}%`
        if(width == 100){
            clearInterval(interval)
        }
    }, 30)

    setTimeout(function(){
        full.style.display = 'none'
    }, 3000)
})






