package Impl;
import dao.Dao;
import dao.DaoException;
import dao.UserDao;
import model.User;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaolmpl implements UserDao {
//    @Override
    //用户注册
    public boolean addUser(User user) throws DaoException {
        String sql = "INSERT INTO login VALUES(?,?)";
        try (
                Connection conn = Dao.getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getPassword());
            pstmt.executeUpdate();
            return true;
        } catch (SQLException se) {
            System.out.println(se);
            return false;
        }
    }

    @Override
    //用户登录
    public boolean uLogin(User user) throws DaoException {
        String sql = "select * from login where username = ? and password = ?";
        Connection conn = null;
        PreparedStatement pstmt = null;
        try {
            conn =  Dao.getConnection();
            pstmt = conn.prepareStatement(sql);
            //这里的意思将用户名和密码填到SQL语句的问号处
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getPassword());
            ResultSet rst = pstmt.executeQuery();//得到数据库的查询结果,一个数据集
            //判断结果集是否有效
            if (rst.next()) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try{
                pstmt.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
            try{
                conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }

        }
        return false;
    }
}
