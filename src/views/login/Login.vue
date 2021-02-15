<template>
  <div>
    <div class="card w-50 mx-auto">
      <div class="card-header">
        로그인
      </div>
      <div class="card-body">
        <form action="/login" method="post">
          <div class="mb-3">
            <label for="userId" class="form-label">사용자ID</label>
            <input type="text" class="form-control" id="userId" name="username" placeholder="test">
          </div>
          <div class="mb-3">
            <label for="userPw" class="form-label">비밀번호</label>
            <input type="password" class="form-control" id="userPw" name="password">
          </div>
        </form>
      </div>
      <div class="card-footer text-muted">
        <button type="button" class="btn btn-primary">로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>

</style>
