package dao;

import model.User;
public interface UserDao extends Dao{
    //用户注册
    public boolean addUser (User user) throws DaoException;
    //用户登录
    public boolean uLogin (User user)throws DaoException;
//    // 用户更改密码
//    public User findByUsername (String username) throws DaoException;

}
