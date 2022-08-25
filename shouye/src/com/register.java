package com;
import Impl.UserDaolmpl;
import dao.UserDao;
import model.User;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet(name = "registerServlet", urlPatterns = {"/reset"})
public class register extends HttpServlet {
    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
            throws ServletException, IOException {
        UserDao dao = new UserDaolmpl();
        User user = new User();
        try{
            // 将传递来的字符串重新使用utf-8编码，以免产生乱码
            user.setUsername(new String(request.getParameter("username")
                    .getBytes("iso-8859-1"),"UTF-8"));
            user.setPassword(new String(request.getParameter("password")
                    .getBytes("iso-8859-1"),"UTF-8"));
            boolean success = dao.addUser(user);
            if(success){
                response.sendRedirect("reset.html");
            }
        }catch(Exception e){
            System.out.println(e);
        }
    }
}


