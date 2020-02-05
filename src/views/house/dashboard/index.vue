<template>
  <div>
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="srcs[item-1]" height="100%" width="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="height: 100px;" class="info-all">
      <div class="info borders">
        <span style="font-size: 20px">您的姓名:</span></br>
        <span style="font-size: 18px">{{name}}</span>
      </div>
      <div class="info borders">
        <span style="font-size: 20px">您的权限:</span></br>
        <span style="font-size: 18px">{{roles}}</span>
      </div>
      <div class="info borders">
        <span style="font-size: 13px ; max-width:180px ">{{introduction}}</span>
      </div>
    </div>
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="money" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">目前成交总金额</div>
            <count-to :start-val="0" :end-val="countMoney" :duration="1" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('messages')">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="star" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">最火房源点击数</div>
            <count-to :start-val="0" :end-val="firePick" :duration="1" class="card-panel-num" />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="guide" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">最火房源地址
            </div>
            <div style="width:85px">
              <span style="width:85px">{{ address.slice(0,14) }}</span>
            </div>
            <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import png1 from '@/assets/mypng/banner1.png'
import png2 from '@/assets/mypng/banner2.png'
import png3 from '@/assets/mypng/banner3.png'
import CountTo from 'vue-count-to'
import { getNowData } from '@/api/bigdata'

export default {
  data() {
    return {
      srcs: [png1, png2, png3],
      avatar: '',
      roles: '',
      name: '',
      introduction: '',
      countMoney: 0,
      firePick: 0,
      address: ''
    }
  },
  components: {
    CountTo
  },
  created() {
    var roles = this.$store.getters.roles
    var name = this.$store.getters.name
    var introduction = this.$store.getters.introduction
    this.name = name
    this.roles = roles
    if (introduction === '' || introduction === undefined) {
      this.introduction = '这个人很懒,什么都没留下~'
    } else {
      this.introduction = introduction
    }

    this.getDatas()
  },
  methods: {
    getDatas() {
      getNowData().then(response => {
        this.firePick = response.data.firePick
        this.address = response.data.address
        this.countMoney = response.data.countMoney
      })
      console.log(this.address)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
}
.borders{
  border: 1px solid #f8f7f7;
  background-color: #f8f7f7;
  border-radius: 10px;
  height: 80px;
  width: 200px;
  box-shadow: 5px 5px 5px 5px #d6d6d6;
}

.info-all{
  display: flex;
  flex-direction:row;
  // justify-content: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
}
</style>

