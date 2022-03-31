// 订阅收集组件

import React from 'react'

const CalltoActionSection = () => {
  return (
    <div className="full-container  subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 subscribe-head">
            <div className="call-title text-white text-center fs-3">
              {/* DO YOU NEED MORE TIPS ? */}
              你需要更多的提示吗？
              <br />
              <p className="fs-5"> 登录，并且免费获取更好的提示.</p>
            </div>
            {/* form group */}
            <form className="form-section">
              <input placeholder="你的邮箱" name="email" type="email" />
              <input value="确定" name="subscribe" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalltoActionSection
