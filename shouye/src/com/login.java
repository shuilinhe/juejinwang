package com;
import Impl.UserDaolmpl;
import dao.DaoException;
import dao.UserDao;
import model.User;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "loginServlet", urlPatterns = {"/login"})
public class login extends HttpServlet {
    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        String username = request.getParameter("username").trim();
        String password = request.getParameter("password").trim();
        PrintWriter out = response.getWriter();

        User user = new User(username, password);
        try {
            UserDao dao = new UserDaolmpl();
            Boolean b = dao.uLogin(user);
            if (b) {
                /*response.sendRedirect("successLogin.html");*/
                out.print("<script>alert('登录成功！')</script>");
            } else {
                /*System.out.println("false！！");*/
                out.print("登录失败");
            }
        } catch (DaoException e) {
            e.printStackTrace();
        }
    }
}