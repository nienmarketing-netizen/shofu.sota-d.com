# Thư mục lưu trữ hình ảnh (Public Images)

Thư mục `public/images` này được dùng để lưu trữ các tài nguyên tĩnh như hình ảnh, biểu tượng (icon), v.v. 
Khi bạn tải mã nguồn này về và đẩy lên GitHub, bạn có thể copy trực tiếp các file ảnh gốc vào thư mục này.

## Cách sử dụng:

1. Đặt file ảnh của bạn vào đây, ví dụ: `background-hero-section-full-solution-shofu.png`.
2. Trên code (React/Vite), bạn có thể gọi trực tiếp ảnh đó thông qua đường dẫn tuyệt đối bắt đầu bằng dấu `/`, ví dụ:
   `<img src="/images/background-hero-section-full-solution-shofu.png" alt="Hero" />`

Vite sẽ tự động copy các file trong thư mục `public` ra ngoài cùng của thư mục build (`dist`) khi triển khai (deploy).

Lưu ý: File `README.md` này được tạo ra để đảm bảo Git theo dõi (track) thư mục này (vì Git mặc định không lưu các thư mục trống). Bạn có thể giữ lại hoặc xóa nó sau khi đã thêm ảnh vào.
