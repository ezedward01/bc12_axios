function SanPhamService (){
    this. layDSSP = function(){
        // Get: lấy dữ liệu từ server
        // axios trả về 1 promise
        return axios({
            url: 'https://60d5dbfa943aa60017768c5c.mockapi.io/products',
            method: 'GET'
        });
        
    }
}